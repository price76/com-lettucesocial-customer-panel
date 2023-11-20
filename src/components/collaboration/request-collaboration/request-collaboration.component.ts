import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreatorService } from 'src/services/creator/creator.service';

@Component(
	{
		selector: 'request-collaboration',
		templateUrl: './request-collaboration.component.html',
		styleUrls: ['./request-collaboration.component.scss']
	}
)

export class RequestCollaborationComponent implements OnInit
	{
		creatorId:string ="";
		isLoading:boolean = false;
		creator?: any;

		constructor
		(
			private route: ActivatedRoute,
			private router: Router,
			private creatorService: CreatorService,
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
								this.navigate_findCreatorByZipCode();
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


		async getCreatorById
		(): Promise<void>
			{
				this.isLoading = true;

				const data = await this.creatorService.getCreatorById(
					this.creatorId
				);

				this.creator = data.creator;
				
				this.isLoading = false;

			}

		getCreatorImageUrl
		():string
			{
				const instagramHandleLoweCase = this.creator.instagramHandle.toLowerCase();
				const renamedInstagramHandleLoweCase = instagramHandleLoweCase.replace(/\./g, '_');
				const url = `http://assets.lettucesocial.com/creators/${renamedInstagramHandleLoweCase}.png`;
				return url;
			}

		getCreatorTitle
		():string
			{
				const result = `${this.creator.firstName} ${this.creator.lastName.slice(0,1)}`;
				return result;
			}
	}
