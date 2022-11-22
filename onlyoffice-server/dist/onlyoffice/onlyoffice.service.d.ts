import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { OnlyofficeCallbackDto, OnlyofficeForceSaveDto } from './onlyoffice.dto';
import { OnlyofficeCallback, OnlyofficeForceSave, OnlyofficeEditorConfig } from './onlyoffice.entity';
export declare class OnlyofficeService {
    private readonly request;
    private readonly config;
    private readonly jwt;
    constructor(request: HttpService, config: ConfigService, jwt: JwtService);
    private readonly logger;
    callback(body: OnlyofficeCallbackDto): Promise<OnlyofficeCallback>;
    forceSave(body: OnlyofficeForceSaveDto): Promise<OnlyofficeForceSave>;
    editorDefaultConfig(): OnlyofficeEditorConfig;
    signJwt(editorConfig: OnlyofficeEditorConfig): OnlyofficeEditorConfig;
}
