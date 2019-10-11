import { Component, Input, Type, ViewContainerRef, Injector, InjectionToken, ComponentFactoryResolver, StaticProvider } from '@angular/core';

export const LIST_ITEM = new InjectionToken('LIST_ITEM') 

@Component({
  selector: 'custom-list',
  template: ``
})
export class CustomListComponent<T>  {
  @Input()
  listItemCmp: Type<{}>;

  @Input()
  items: T[];

  private _markedForChange = false

  constructor(
    private readonly _injector: Injector,
    private readonly _viewRef: ViewContainerRef,
    private readonly _cfr: ComponentFactoryResolver
  ) { }

  ngOnChanges() {
    this._markedForChange = true
  }

  ngAfterViewChecked() {
    if (!this._markedForChange) return;
    this._markedForChange = false;
    setTimeout(() => this._buildItemComponents(), 0)
  }

  private _buildItemComponents() {
    this._viewRef.clear()
    if (typeof this.listItemCmp !== 'function') return
    const cmp = this._cfr.resolveComponentFactory(this.listItemCmp)
    for (const item of (this.items || [])) {
      const providers: StaticProvider[] = [
        {provide: LIST_ITEM, useValue: item}
      ]
      const injector = Injector.create({
        providers,
        parent: this._injector
      })
      this._viewRef.createComponent(cmp, undefined, injector)
    }
  }
}
