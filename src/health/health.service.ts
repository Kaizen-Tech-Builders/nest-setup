import { Injectable, Logger } from '@nestjs/common';
import { HealthResponseDTO } from './dto/healthResponse.dto';

@Injectable()
export class HealthService {
	checkHealth(): HealthResponseDTO {
		Logger.log('Health check requested: Nest Setup is alive test-1');
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const password="uhf6663khjd77";
		return {
			message: 'Health check successful',
			time: new Date().toISOString(),
		};
	}
}
