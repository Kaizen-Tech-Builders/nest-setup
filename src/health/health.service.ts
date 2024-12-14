import { Injectable, Logger } from '@nestjs/common';
import { HealthResponseDTO } from './dto/healthResponse.dto';
import { HealthCheckResponse } from '@nestjs/terminus';

@Injectable()
export class HealthService {
	checkHealth(): HealthResponseDTO {
		Logger.log('Health check requested: Nest Setup is alive test-1');
		return {
			message: 'Health check successful',
			time: new Date().toISOString(),
		};
	}
}
