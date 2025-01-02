﻿using Microsoft.AspNetCore.Mvc.ModelBinding;
using System.Text.Json;

namespace MoviesApi.Utilities
{
    public class TypeBinder : IModelBinder
    {
        public Task BindModelAsync(ModelBindingContext bindingContext)
        {
            var propertyName = bindingContext.ModelName;
            var value = bindingContext.ValueProvider.GetValue(propertyName);

            if (value == ValueProviderResult.None)
            {
                return Task.CompletedTask;
            }

            try
            {
                var destinationType = bindingContext.ModelMetadata.ModelType;
                var deserializedValue = JsonSerializer.Deserialize(value.FirstValue!,
                    destinationType, new JsonSerializerOptions { PropertyNameCaseInsensitive = true } );
                bindingContext.Result = ModelBindingResult.Success( deserializedValue );
            }
            catch (Exception)
            {
                bindingContext.ModelState.TryAddModelError(propertyName, "The value was not of the appropriate data type");
            }

            return Task.CompletedTask;
        }
    }
}
