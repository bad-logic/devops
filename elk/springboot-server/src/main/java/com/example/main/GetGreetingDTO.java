package com.example.main;
import jakarta.validation.constraints.*;

public class GetGreetingDTO {
    @NotNull(message = "language code cannot be empty")
    @Positive(message = "must be a positive number")
    @Min(1)
    @Max(100)
    private int languageCode;

    public GetGreetingDTO() {
    }

    public GetGreetingDTO(int languageCode) {
        this.languageCode = languageCode;
    }

    public int getLanguageCode() {
        return languageCode;
    }

    public void setLanguageCode(int languageCode) {
        this.languageCode = languageCode;
    }

    @Override
    public String toString() {
        return "GetGreetingDTO{" +
                "languageCode=" + languageCode +
                '}';
    }
}
