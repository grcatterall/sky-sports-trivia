import { Fragment } from "react"


export const AnswerButton = ({ answerButtons, index, onClickAnswer, checkSelectedAnswer, revealAnswerOnSubmit, allowNavigation, questionType, answer, nanoid, onSelectAnswer}
    // {answerButtons: any, index: any, onClickAnswer: any, checkSelectedAnswer: any, revealAnswerOnSubmit: any, allowNavigation: any, questionType: any, answer: any, nanoid: any, onSelectAnswer: any}
) => {
    const buttonRender = () => {
        if (answerButtons[index].className === 'incorrect') {
            return (
                <button
                    type="button"
                    disabled={answerButtons[index].disabled || false}
                    className={
                        `bg-[var(--bg-red)] answerBtn btn  relative border-[1px] border-slate-950 px-[11px] py-[12px]  text-left`}
                    onClick={() => (revealAnswerOnSubmit ? onSelectAnswer(index) : onClickAnswer(index))}
                >
                    {questionType === 'text' && <span>{answer}</span>}
                    {questionType === 'photo' && <img src={answer} alt="answer" />}
                </button>
            );
        } else if (answerButtons[index].className === 'correct') {
            return (
                <button
                    type="button"
                    disabled={answerButtons[index].disabled || false}
                    className="bg-[#a6e0ba] answerBtn btn relative border-[1px] border-slate-950 px-[11px] py-[12px] text-left after:content-['\2713'] after:ml-2 after:absolute after:right-5 after:text-lg after:top-[20%]"
                    onClick={() => (revealAnswerOnSubmit ? onSelectAnswer(index) : onClickAnswer(index))}
                >
                    {questionType === 'text' && <span>{answer}</span>}
                    {questionType === 'photo' && <img src={answer} alt="answer" />}
                </button>
            );
        }

        return (
            <button
                type="button"
                disabled={answerButtons[index].disabled || false}
                className={
                    `answerBtn btn  relative border-[1px] border-slate-950 px-[11px] py-[12px] bg-slate-100 text-left`}
                onClick={() => (revealAnswerOnSubmit ? onSelectAnswer(index) : onClickAnswer(index))}
            >
                {questionType === 'text' && <span>{answer}</span>}
                {questionType === 'photo' && <img src={answer} alt="answer" />}
            </button>
        )
    }

    return (
        <Fragment key={nanoid()}>
            {(answerButtons[index] !== undefined)
                ? buttonRender()
                : (
                    <button
                        type="button"
                        onClick={() => (revealAnswerOnSubmit ? onSelectAnswer(index) : onClickAnswer(index))}
                        className={`answerBtn btn ${(allowNavigation && checkSelectedAnswer(index + 1)) ? `bg-[#a6e0ba] after:content-["\\2713"] after:ml-2 after:absolute after:right-5 after:text-lg after:top-[20%] ` : ''} 
                  hover:shadow-md hover:bg-slate-200 ease-in-out transition relative bg-slate-100 font-light px-[11px] py-[12px] border-[1px] border-slate-950 text-left`}
                    >
                        {questionType === 'text' && answer}
                        {questionType === 'photo' && <img src={answer} alt="answer" />}
                    </button>
                )}
        </Fragment>
    )
}