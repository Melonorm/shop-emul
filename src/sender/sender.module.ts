import {HttpModule, Module} from '@nestjs/common';
import { SenderController } from './sender.controller';
import { SenderService } from './sender.service';

@Module({
  imports: [HttpModule],
  controllers: [SenderController],
  providers: [SenderService]
})
export class SenderModule {}
