import { atom, useRecoilState } from "recoil";

export const modalState = atom({
    key: 'modalState',
    default: false,
})