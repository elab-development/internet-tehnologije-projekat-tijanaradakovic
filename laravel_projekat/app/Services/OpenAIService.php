<?php

namespace App\Services;
use Illuminate\Support\Facades\Http;

class OpenAIService
{
    protected $apiKey ;
    protected $apiUrl = "https://api.openai.com/v1/chat/completions";

    public function __construct()
    {
        $this->apiKey = env('OPEN_AI_API_KEY');
    }
    public function generateTravelPlan($userInput)
    {
        $messages =[
            [
                'role'=> 'user',
                'content'=> $this->createPrompt($userInput),

            ]

        ];
        $response= Http::withHeaders([
            'Authorization' => 'Bearer ' . $this->apiKey,
            'Content-Type' =>'application/json',

        ])->post($this->apiUrl,[
            'model' =>'gpt-3.5-turbo',
            'messages'=>$messages,
            'temperature'=> 0.7,
        ]);

        return $response->json();
    }
    protected function createPrompt($userInput){
        $prompt = "Create detailed travel plan for user with the following details:\n";
        $prompt .= "Destination ".$userInput['destination']."\n";
        $prompt .= "Start date ".$userInput['start_date']."\n";
        $prompt .= "End date ".$userInput['end_date']."\n";
        $prompt .= "Return the travel plan in JSON format with the following structure";
        $prompt .= "{ \"Plans\": [{\"day\": \"Day number\", \"description\": \"Plan description\", \"activity\": \"activity\" }]";
        return $prompt;
        
    }
}