import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorHelper } from 'src/helper/errorHelper';
import { PackageService } from 'src/services/package/package.service';

@Component(
	{
		selector: 'collaboration-plane',
		templateUrl: './collaboration-plane.component.html',
		styleUrls: ['./collaboration-plane.component.scss']
	}
)

export class CollaborationPlaneComponent 
	{
		creatorId?:string;
		isLoading:boolean = false;
		packageList?:any[];

		constructor
		(
			private route: ActivatedRoute,
			private router: Router,
			private packageService: PackageService,
			private errorHelper: ErrorHelper	
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
										this.creatorId = creatorIdParameter;
										this.getAllPackage();
									}
								else
									{
										this.navigate_findCreatorByZipCode();
									}
								
							}
						);
					}
				
				
			}

		async getAllPackage
		():Promise<void>
			{
				this.isLoading = true;

				const data = await this.packageService.getAllPackage();

				this.packageList = data.packageList;
				
				this.isLoading = false;
			}

		navigate_findCreatorByZipCode
		():void
			{
				this.router.navigate(
					['/','creator']
				);
			}
	}
