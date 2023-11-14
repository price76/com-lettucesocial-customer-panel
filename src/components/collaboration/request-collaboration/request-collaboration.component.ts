import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component(
	{
		selector: 'request-collaboration',
		templateUrl: './request-collaboration.component.html',
		styleUrls: ['./request-collaboration.component.css']
	}
)

export class RequestCollaborationComponent implements OnInit
	{
		creatorId?:string;
		creator?: any;

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
				this.route.params.subscribe(params => 
					{
						const creatorIdParameter = params['crtrId'];
						if
						(
							creatorIdParameter
						)
							{
								this.creatorId = creatorIdParameter
								this.getCreatorById();
							}
						else
							{
								//this.navigate_findCreatorByZipCode();
								alert('!')
							}
						
					}
				);
				
			}

		navigate_findCreatorByZipCode
		():void
			{
				this.router.navigate(
					['/','creator']
				);
			}


		getCreatorById
		(): void
			{
				this.creator = {
					_id:"123456",
					title: 'Ashley S',
					instagramHandle:'@ashleystudent'
				}
			}
	}
