import React, {useCallback, useMemo, useState} from 'react';
import {BookInfo} from "./BookInfo";
import {Like} from "./Like";
import {Header} from "./Header";

export default {
    title: 'UseCallback/Example',
}

type BookPropsTypes = {

}
type Comment = {
    id: number;
    text: string;
}
export type commentsType = Array<Comment>



export const Book = (props: BookPropsTypes) => {
    const [likeCount , setLikeCount] = useState(0);
    const [comments, setComments] = useState<commentsType>([]);

    const addComments = (text: string) => {
        const newComment = {id: new Date().getTime(), text};
        setComments([...comments, newComment])
    }
    const MemoizedAddComments = useCallback(
         (text: string) => {
            const newComment = {id: new Date().getTime(), text};
            setComments([...comments, newComment])
        }, [comments]); //так как  useMemo используется для запоминания отдельных видов пропсов, например отфильтрованный перед отправкой в пропсы массив комментариев, или обьект или другие данные, но так как функция тоже является объектом то ее тоже нужно ретурнить



    const setLikeCountCallback = useCallback(() => {
        setLikeCount(likeCount + 1);
    },[likeCount]);    //если не добавить зависимости он замемоизирует постоянный вызов к старому Lexical env

    const filteredComments = useMemo(() => {
        let filtered = comments.filter((c) => !c.text.includes('хуй'));
        return filtered;
    }, [comments]); // потому что после фильтра тоже постоянно новый массивы, который мы и мемоизируем в зависимости от изменнных комментов
    console.log(comments); //todo  как сделать так, что бы он не изменял и при commentsax
    return <div>
        <Header title={'Book'}/>
        <BookInfo comments={filteredComments} addComments={MemoizedAddComments}/>
        <Like likes={likeCount} setLikeCount={setLikeCountCallback}/>
    </div>
}