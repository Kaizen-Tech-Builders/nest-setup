import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('HealthController (e2e)', () => {
	let app: INestApplication;

	beforeEach(async () => {
		const moduleFixture: TestingModule = await Test.createTestingModule({
			imports: [AppModule],
		}).compile();

		app = moduleFixture.createNestApplication();
		await app.init();
	});
	it('/dev/health (GET)', async () => {
		const response = await request(app.getHttpServer()).get('/dev/health');
		expect(response.status).toBe(200);
		expect(response.body.message).toBe('Health check successful');
	});
});
