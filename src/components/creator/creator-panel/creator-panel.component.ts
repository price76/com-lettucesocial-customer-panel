import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

export class CreatorPanelComponent implements OnInit
	{

		creatorList!: any[];
		filterOptions: any ={};
		isLoading:boolean = false;

		constructor
		(
			private route: ActivatedRoute,
			private creatorService: CreatorService,
			private errorHelper:ErrorHelper,
			private gtag: Gtag
		){}

		ngOnInit
		(): void
			{
				this.route.queryParams.subscribe(params => 
					{
						const zipcodeParameter = params['zipcode'];
						if
						(
							zipcodeParameter
						)
							{
								let filterOptions = {
									zipCode:zipcodeParameter
								}
								
								this.setFilter(filterOptions)
							}
					}
				);
			}

		setFilter
		(
			filterOptions:any
		):void
			{
				this.filterOptions = filterOptions;

				this.getAllCreatorByZipcode();
			}

		async getAllCreatorByZipcode
		():Promise<void>
			{
				const searchedZipcode:string = this.filterOptions.zipCode.toString()
				
				this.gtag.event(
					'search',
					{ 
						search_term: searchedZipcode
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
								search_term: searchedZipcode
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
