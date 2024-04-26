declare namespace Projeto {
    type User = {
        id?: number;
        userName: string;
        fullName: string;
        accountNonExpired: boolean;
        accountNonLocked: boolean;
        credentialsNonExpired: boolean;
        enabled: boolean;
    };
}