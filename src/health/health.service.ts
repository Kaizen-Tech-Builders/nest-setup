import { Injectable, Logger } from '@nestjs/common';
import { HealthResponseDTO } from './dto/healthResponse.dto';

@Injectable()
export class HealthService {
	checkHealth(): HealthResponseDTO {
		const password= 'test-5';
		Logger.log('password', password);
		Logger.log('Health check requested: Nest Setup is alive test-5');
		return {
			message: 'Health check successful',
			time: new Date().toISOString(),
		};
	}
}
