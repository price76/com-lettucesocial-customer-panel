import { Component } from '@angular/core';
import { Gtag } from 'angular-gtag';
import { ErrorHelper } from 'src/helper/errorHelper';
import { CreatorService } from 'src/services/creator/creator.service';

@Component(
	{
		selector: 'creator-panel',
		templateUrl: './creator-panel.component.html',
		styleUrls: ['./creator-panel.component.scss']
	}
)

export class CreatorPanelComponent
	{

		creatorList!: any[];
		filterOptions: any ={};
		isLoading:boolean = false;

		constructor
		(
			private creatorService: CreatorService,
			private errorHelper:ErrorHelper,
			private gtag: Gtag
		){}

		setFilter
		(
			filterOptions:any
		):void
			{
				this.filterOptions = filterOptions;
				console.log(this.filterOptions);

				this.getAllCreatorByZipcode();
			}

		async getAllCreatorByZipcode
		():Promise<void>
			{
				this.gtag.event(
					'search',
					{ 
						search_term: this.filterOptions.zipCode.toString()
					  }
				);

				try
					{
						this.isLoading = true;

						const data = await this.creatorService.getAllCreatorByZipcode(
							this.filterOptions.zipCode
						);

						this.gtag.event(
							'view_search_results',
							{ 
								search_term: this.filterOptions.zipCode.toString()
							}
						);

						this.creatorList = data.creatorList;
						
						this.isLoading = false;
					}
				catch
				(
					error:any
				)
					{
						this.isLoading = false;
						this.errorHelper.showErrorAsAlert(error);
					}
			}

		
	}
