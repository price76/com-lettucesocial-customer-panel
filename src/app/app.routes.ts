import { Routes } from '@angular/router';
import { BusinessRequestCollaborationComponent } from 'src/components/business/business-request-collaboration/business-request-collaboration.component';
import { CollaborationInvoiceComponent } from 'src/components/collaboration/collaboration-invoice/collaboration-invoice.component';
import { CollaborationPlaneComponent } from 'src/components/collaboration/collaboration-plane/collaboration-plane.component';
import { CollaborationReceiptComponent } from 'src/components/collaboration/collaboration-receipt/collaboration-receipt.component';
import { RequestCollaborationComponent } from 'src/components/collaboration/request-collaboration/request-collaboration.component';

import { CreatorPanelComponent } from 'src/components/creator/creator-panel/creator-panel.component';

export const routes: Routes = [
    {
        path:'creator',
        component: CreatorPanelComponent,
    },
    {
        path:'collabrotaion/:crtrId',
        component: RequestCollaborationComponent,
        children:
            [
                {
                    path:'selectPlane',
                    component: CollaborationPlaneComponent,
                },
                {
                    path:'invoice/:planeId',
                    component: CollaborationInvoiceComponent,
                },
            ]
    },
    {
        path:'receipt/:orderId',
        component: CollaborationReceiptComponent,
    },


]