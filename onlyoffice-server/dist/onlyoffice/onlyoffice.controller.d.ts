import { OnlyofficeCallbackDto } from './onlyoffice.dto';
import { OnlyofficeCallback } from './onlyoffice.entity';
import { OnlyofficeService } from './onlyoffice.service';
export declare class OnlyofficeController {
    private onlyofficeService;
    constructor(onlyofficeService: OnlyofficeService);
    callback(body: OnlyofficeCallbackDto): Promise<OnlyofficeCallback>;
}
