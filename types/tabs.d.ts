import { ElementUIComponent } from './component'

export type TabType = 'card' | 'border-card'

/** Divide data collections which are related yet belong to different types */
export declare class ElTabs extends ElementUIComponent {
  /** Type of Tab */
  type: TabType

  /** Whether Tab is closable */
  closable: boolean

  /** Whether Tab is addable */
  addable: boolean

  /** Whether Tab is addable and closable */
  editable: boolean

  /** Name of the selected tab */
  value: string
}
