import React, { useState } from 'react';

const FloodDrill = () => {
  const [drillStage, setDrillStage] = useState('preparedness'); // 'preparedness', 'evacuation', 'recovery'

  const handleNextStage = () => {
    if (drillStage === 'preparedness') {
      setDrillStage('evacuation');
    } else if (drillStage === 'evacuation') {
      setDrillStage('recovery');
    } else if (drillStage === 'recovery') {
      alert('Drill completed! Review your performance.');
    }
  };

  const getBackgroundColor = () => {
    switch (drillStage) {
      case 'preparedness':
        return '#87CEEB'; // Sky blue for a calm start
      case 'evacuation':
        return '#4682B4'; // Steel blue for a rising flood
      case 'recovery':
        return '#A9A9A9'; // Dark gray for post-flood scene
      default:
        return '#FFFFFF';
    }
  };

  return (
    <div style={{
      height: '100vh',
      width: '100%',
      backgroundColor: getBackgroundColor(),
      transition: 'background-color 2s ease-in-out',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
    }}>
      <h1>Flood Drill Simulation</h1>
      {drillStage === 'preparedness' && (
        <>
          <p>Stage 1: Preparedness. Do you have an emergency kit and an evacuation plan?</p>
          <button onClick={handleNextStage}>Proceed to Evacuation</button>
        </>
      )}
      {drillStage === 'evacuation' && (
        <>
          <p>Stage 2: Evacuation. The flood is rising. Follow your plan and evacuate to high ground.</p>
          <button onClick={handleNextStage}>Proceed to Recovery</button>
        </>
      )}
      {drillStage === 'recovery' && (
        <>
          <p>Stage 3: Recovery. The flood has subsided. Ensure your area is safe before re-entry.</p>
          <button onClick={handleNextStage}>End Drill</button>
        </>
      )}
    </div>
  );
};

export default FloodDrill;