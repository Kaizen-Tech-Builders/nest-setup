import { Injectable, Logger } from '@nestjs/common';
import { HealthResponseDTO } from './dto/healthResponse.dto';

@Injectable()
export class HealthService {
	checkHealth(): HealthResponseDTO {
		Logger.log('Health check requested: Nest Setup is alive test-1');
		return {
			message: 'Health check successful 1',
			time: new Date().toISOString(),
		};
	}
}
