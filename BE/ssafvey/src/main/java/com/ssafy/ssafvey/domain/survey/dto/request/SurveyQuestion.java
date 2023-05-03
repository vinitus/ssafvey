package com.ssafy.ssafvey.domain.survey.dto.request;

import java.util.List;

public class SurveyQuestion {
    private int order;
    private String question;
    private boolean isMultipleChoice;
    private List<Choice> choices;

    // getters and setters
}
