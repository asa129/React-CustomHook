import axios from 'axios';
import { UserProfile } from "../types/userProfile";
import { useState } from 'react';
import { User } from "../types/api/user";

// 全ユーザーを一覧取得するカスタムフック
export const useAllUsers = () => {
    const [userProfiles, setUserProfiles] = useState<Array<UserProfile>>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const getUsers = () => {
        setLoading(true);
        setError(false);
        axios.get<Array<User>>("https://jsonplaceholder.typicode.com/users").then(
        (res) => {
            const data = res.data.map((user) => ({
            id: user.id,
            name: `${user.name}（${user.username}）`,
            email: user.email,
            address: `${user.address.street}${user.address.street}${user.address.city}`,
            }));
            setUserProfiles(data);
        }
        ).catch(() => {setError(true)}).finally(() => setLoading(false));
    }

    return { getUsers, userProfiles, loading, error };
}