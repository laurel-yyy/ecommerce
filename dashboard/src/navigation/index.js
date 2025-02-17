import { allNav } from "./allNav";

export const getNav = (role) => {
    const finalNav = [];

    for (let i=0; i<allNav.length; i++) {
        const nav = allNav[i];
        if (nav.role === role) {
            finalNav.push(nav);
        }
    }

    return finalNav;
}