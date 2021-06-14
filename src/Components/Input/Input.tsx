import  React, {ChangeEvent} from 'react';

type InputComponentPropsType = {
    value: string,
    setValue: (e: ChangeEvent<HTMLInputElement>) => void,
}

export const InputComponent: React.FC<InputComponentPropsType> = ({setValue, value}) => {
        return <div>
            <input value={value} onChange={setValue}/>
        </div>
}
