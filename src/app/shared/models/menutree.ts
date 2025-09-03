export interface MenuItem {
id: number;
refGroup?: number;
name: string;
objectName?: string;
refMenuId: number | null;
orderNum?: number | null;
type?: string | null;
menuPath?: string | null;
remarks?: string | null;
isActive?: boolean;
menuIcon?: string | null;
// client-side only
children?: MenuItem[];
}


export interface ApiResponse<T> {
data: T;
}