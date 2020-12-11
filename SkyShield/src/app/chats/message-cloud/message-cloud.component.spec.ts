import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageCloudComponent } from './message-cloud.component';

describe('MessageCloudComponent', () => {
	let component: MessageCloudComponent;
	let fixture: ComponentFixture<MessageCloudComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ MessageCloudComponent ]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(MessageCloudComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
