import { Component } from '@angular/core';
import { CreatorService } from 'src/services/creator/creator.service';

@Component(
	{
		selector: 'creator-panel',
		templateUrl: './creator-panel.component.html',
		styleUrls: ['./creator-panel.component.css']
	}
)

export class CreatorPanelComponent
	{

		creatorList!: any[];
		filterOptions: any ={};
		isLoading:boolean = false;

		constructor
		(
			private creatorService: CreatorService
		){}

		setFilter
		(
			filterOptions:any
		):void
			{
				this.filterOptions = filterOptions;
				console.log(this.filterOptions);

				this.getAllCreatorByZipcode();
				

				// if
				// (
				// 	filterOptions.startDate &&
				// 	filterOptions.endDate 
				// )
				// 	{
				// 		this.selectedProject = filterOptions.project;
				// 		this.getAllByProjectAndStartDateAndEndDate();
				// 	}
				// else
				// 	{
				// 		this.contractList = [];
				// 	}
			}

		async getAllCreatorByZipcode
		():Promise<void>
			{
				this.isLoading = true;

				const data = await this.creatorService.getAllCreatorByZipcode(
					this.filterOptions.zipCode
				)

				this.creatorList = data.creatorList;
				
				this.isLoading = false;
			}
		
	}
