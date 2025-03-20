import { User } from "../types/user";
import { FC } from "react";

type Props = {
    user: User;
}

export const UserCard: FC<Props>  = (props) => {
    const { user } = props;
    return (
        <>
        <dl>
            <dt>名前</dt>
            <dd>{user.name}</dd>
            <dt>ユーザー名</dt>
            <dd>{user.username}</dd>
            <dt>メールアドレス</dt>
            <dd>{user.email}</dd>
        </dl>
        </>
    );
}