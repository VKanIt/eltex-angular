import { Directive, inject, Input, TemplateRef, ViewContainerRef } from "@angular/core";
import { AUTH_SERVICE } from "../../services/auth-service/auth-service.token";

@Directive({
    selector: '[appRoleView]'
})
export class RoleView {
    private authService = inject(AUTH_SERVICE);
    private readonly viewContainerRef = inject(ViewContainerRef);
    private readonly templateRef = inject(TemplateRef);

    @Input() set appRoleView(role: string) {
        if (this.authService.client().role === role) {
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        } else {
            this.viewContainerRef.clear();
        }
    }
}