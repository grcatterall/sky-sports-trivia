import React from 'react';

function ProgressBar({
  progressBarColor = '#9de1f6', progress, height = '15px', quizLength, isEndQuiz,
}) {
  const fixedProgress = progress - 1;
  const progressUnit = 100 / quizLength;

  const progressBarContainer = {
    width: '100%',
    backgroundColor: '#C7D3EB',
    height,
    borderRadius: 40,
    position: 'relative',
    overflow: 'hidden',
  };

  const progressBar = {
    width: isEndQuiz ? '100%' : `${progressUnit * fixedProgress}%`,
    height: '100%',
    backgroundColor: progressBarColor,
    transition: 'width 0.3s ease',
    borderRadius: '20px'
  };
  return (
    <div className='w-full relative mt-2'>
      <span className='absolute left-1/2 h-20px -top-5'>
        {isEndQuiz ? '100%' : `${Math.round(progressUnit * fixedProgress)}%`}
      </span>
      <div style={progressBarContainer} className='mt-1'>
        <div style={progressBar} />
      </div>
    </div>
  );
}

export default ProgressBar;
