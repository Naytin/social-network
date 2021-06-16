import MessageInform from "../components/common/MessageInform/MessageInform";

export const required = (value: string): any | undefined => {
    if(value) return undefined
    return 'field is required'
    // return <MessageInform style={{width: "170px"}}>field is required</MessageInform>
}
export const maxLengthCreator = (maxLength: number) => (value: string): string | undefined => {
        if(value && value.length > maxLength) return `Max length is ${maxLength} symbols`
        return undefined
}

