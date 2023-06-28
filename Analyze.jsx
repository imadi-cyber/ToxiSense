import "./analyze.css"
import Navbar from '../../Components/Navbar/Navbar'
import React, { useState, useEffect } from 'react';
import * as toxicity from '@tensorflow-models/toxicity';
// import React, {useState,useEffect} from 'react'

const Analyze = () => {
  const [inputText, setInputText] = useState('');
  const [emotionResult, setEmotionResult] = useState('');
  const [model, setModel] = useState(null);

  useEffect(() => {
    loadModel();
  }, []);

  const loadModel = async () => {
    try {
      const model = await toxicity.load();
      console.log('Model loaded.');
      setModel(model);
    } catch (err) {
      console.error('Error loading model:', err);
    }
  };

  const predictEmotion = async (event) => {
    event.preventDefault(); // Prevent page refresh

    try {
      const predictions = await model.classify(inputText, {
        returnAllResults: true,
      });
      console.log(predictions);
      const toxicPredictions = predictions.filter(
        (prediction) => prediction.results[0].match
      );
      const result = toxicPredictions.length > 0
        ? toxicPredictions.map((prediction) => `${prediction.label}`)
        : ['Non-toxic'];
      console.log(result[0])
      setEmotionResult(result[0]);
    } catch (err) {
      console.error('Error predicting emotion:', err);
    }
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
    setEmotionResult('');
  };


  return (
    <>
    <Navbar/>
    <div className="analyze">
      <div className="analyze-box">
        <div className="analyze-content">
            <p>Play around with our Toxicity Analyzer!</p>
            <div className="wrapper">
                <div className="container">
                    <h3>Test with your own text!!!</h3>
                    {/* <form action="/predict_api" method="POST"> */}
                    <form onSubmit={predictEmotion}>
                      <textarea value={inputText} onChange={handleInputChange} placeholder='Type your text here'></textarea>
                      <button type="submit" className="btn">Predict Emotion</button>
                    </form>
                </div>
                <div className="container">
                    <h3>Results</h3>
                    <div className="results">
                      {emotionResult}
                    </div>
                </div>
            </div>
        </div>
      
      </div>
    </div>
    </>
  )
}

export default Analyze
