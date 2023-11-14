import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component(
	{
		selector: 'collaboration-plane',
		templateUrl: './collaboration-plane.component.html',
		styleUrls: ['./collaboration-plane.component.css']
	}
)

export class CollaborationPlaneComponent 
	{
		creatorId?:string;

		constructor
		(
			private route: ActivatedRoute,
			private router: Router,
			// private contractService: ContractService,
			// private errorHelper: ErrorHelper
		){}

		ngOnInit
		(): void 
			{
				if
				(
					this.route.parent
				)
					{
						this.route.parent.params.subscribe(params => 
							{
								const creatorIdParameter = params['crtrId'];
								if
								(
									creatorIdParameter
								)
									{
										this.creatorId = creatorIdParameter
									}
								else
									{
										//this.navigate_findCreatorByZipCode();
										alert('!')
									}
								
							}
						);
					}
				
				
			}

		navigate_findCreatorByZipCode
		():void
			{
				this.router.navigate(
					['/','creator']
				);
			}
	}
