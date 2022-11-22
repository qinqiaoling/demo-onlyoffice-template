export declare class IActions {
    type: number;
    userid?: string | number;
}
export declare class IUser {
    id?: string | number;
    name?: string;
}
declare class IChange {
    created?: string;
    user?: IUser;
}
export declare class IHistory {
    serverVersion?: string;
    changes?: IChange[];
}
export declare class OnlyofficeCallbackDto {
    actions?: IActions[];
    changeshistory?: IHistory;
    history?: IHistory;
    changesurl?: string;
    filetype?: string;
    forcesavetype?: number;
    key: string;
    status?: number;
    url?: string;
    userdata?: object;
    users?: string[];
    lastsave?: string;
    token?: string;
}
export declare class OnlyofficeForceSaveDto {
    key: string;
    userdata?: string;
    useJwtEncrypt?: string;
}
export {};
