import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Gtag } from 'angular-gtag';
import { ErrorHelper } from 'src/helper/errorHelper';
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
			private errorHelper: ErrorHelper,
			private gtag: Gtag
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
				try
					{
						this.isLoading = true;

						const data = await this.creatorService.getCreatorById(
							this.creatorId
						);

						

						this.creator = data.creator;

						this.gtag.event(
							'select_creator',
							{ 
								creator_id: this.creator.toString(),
								creator_handle: this.creator.instagramHandle
							}
						);
						
						this.isLoading = false;
					}
				catch
				(
					error: any
				)
					{
						this.isLoading = false;
						this.errorHelper.showErrorAsAlert(error);
					}
				

			}

		getCreatorImageUrl
		():string
			{
				const instagramHandleLoweCase = this.creator.instagramHandle.toLowerCase();
				const renamedInstagramHandleLoweCase = instagramHandleLoweCase.replace(/\./g, '_');
				const url = `https://assets.lettucesocial.com/images/creators/${renamedInstagramHandleLoweCase}.png`;
				return url;
			}

		getCreatorTitle
		():string
			{
				const result = `${this.creator.firstName} ${this.creator.lastName.slice(0,1)}`;
				return result;
			}
	}
