import {Body, Controller, Get, Post} from '@nestjs/common';
import {SenderService} from "./sender.service";
import {FirstOutputCredentialsInterface} from "./types/firstOutputCredentials.interface";
import {AppCodeFromTelegramInterface} from "./types/appCodeFromTelegram.interface";

@Controller('sender')
export class SenderController {
    constructor(private readonly senderService: SenderService) {
    }

    @Get('phone_number')
    async sendPhoneNumber() {
        const phoneNumber = await this.senderService.sendPhoneNumber();
        return phoneNumber;
    }

    @Get('auth_code')
    async sendAuthCode() {
        const code: string = await this.senderService.sendAuthCode();
        return code;
    }



    /*
    @Post('sendFirstData')
    async sendData(@Body() data: FirstOutputCredentialsInterface) {
        data = this.senderService.mockFirstData;
        return this.senderService.sendFirstDataToBack(data);
    }

    @Post('sendAppCode')
    async getAndSendAppCode() {
        const appCodeFromTelegram: AppCodeFromTelegramInterface = await this.senderService.getAppCodeFromTelegram();
        return this.senderService.sendAppCodeToBack(appCodeFromTelegram);
    }
*/
}
