export type Json =
	| string
	| number
	| boolean
	| null
	| { [key: string]: Json | undefined }
	| Json[];

export type Database = {
	public: {
		Tables: {
			category: {
				Row: {
					created_at: string;
					id: string;
					name: string;
					path: string;
				};
				Insert: {
					created_at?: string;
					id?: string;
					name: string;
					path: string;
				};
				Update: {
					created_at?: string;
					id?: string;
					name?: string;
					path?: string;
				};
				Relationships: [];
			};
			order: {
				Row: {
					address_line_1: string;
					address_line_2: string | null;
					country: string;
					created_at: string;
					first_name: string;
					id: string;
					item_count: number;
					last_name: string;
					phone_number: string;
					postal_code: string;
					status: Database["public"]["Enums"]["order_status"];
					total: number;
					user_id: string;
				};
				Insert: {
					address_line_1: string;
					address_line_2?: string | null;
					country: string;
					created_at?: string;
					first_name: string;
					id?: string;
					item_count: number;
					last_name: string;
					phone_number: string;
					postal_code: string;
					status?: Database["public"]["Enums"]["order_status"];
					total: number;
					user_id: string;
				};
				Update: {
					address_line_1?: string;
					address_line_2?: string | null;
					country?: string;
					created_at?: string;
					first_name?: string;
					id?: string;
					item_count?: number;
					last_name?: string;
					phone_number?: string;
					postal_code?: string;
					status?: Database["public"]["Enums"]["order_status"];
					total?: number;
					user_id?: string;
				};
				Relationships: [
					{
						foreignKeyName: "order_user_id_fkey";
						columns: ["user_id"];
						isOneToOne: false;
						referencedRelation: "user";
						referencedColumns: ["id"];
					},
				];
			};
			order_item: {
				Row: {
					created_at: string;
					order_id: string;
					product_id: string;
					purchase_quantity: number;
				};
				Insert: {
					created_at?: string;
					order_id: string;
					product_id: string;
					purchase_quantity: number;
				};
				Update: {
					created_at?: string;
					order_id?: string;
					product_id?: string;
					purchase_quantity?: number;
				};
				Relationships: [
					{
						foreignKeyName: "order_items_order_id_fkey";
						columns: ["order_id"];
						isOneToOne: false;
						referencedRelation: "order";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "order_items_product_id_fkey";
						columns: ["product_id"];
						isOneToOne: false;
						referencedRelation: "product";
						referencedColumns: ["id"];
					},
				];
			};
			product: {
				Row: {
					category_id: string;
					created_at: string;
					description: string | null;
					handle: string;
					id: string;
					images: string[];
					is_in_stock: boolean;
					is_released: boolean;
					name: string;
					price: number;
					stock_quantity: number;
					search_name_description: string | null;
				};
				Insert: {
					category_id: string;
					created_at?: string;
					description?: string | null;
					handle: string;
					id?: string;
					images: string[];
					is_in_stock?: boolean;
					is_released?: boolean;
					name: string;
					price: number;
					stock_quantity: number;
				};
				Update: {
					category_id?: string;
					created_at?: string;
					description?: string | null;
					handle?: string;
					id?: string;
					images?: string[];
					is_in_stock?: boolean;
					is_released?: boolean;
					name?: string;
					price?: number;
					stock_quantity?: number;
				};
				Relationships: [
					{
						foreignKeyName: "product_category_id_fkey";
						columns: ["category_id"];
						isOneToOne: false;
						referencedRelation: "category";
						referencedColumns: ["id"];
					},
				];
			};
			user: {
				Row: {
					email: string;
					id: string;
					is_admin: boolean;
				};
				Insert: {
					email: string;
					id: string;
					is_admin?: boolean;
				};
				Update: {
					email?: string;
					id?: string;
					is_admin?: boolean;
				};
				Relationships: [];
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			search_name_description: {
				Args: {
					"": unknown;
				};
				Returns: string;
			};
		};
		Enums: {
			order_status:
				| "PENDING"
				| "PROCESSING"
				| "SHIPPED"
				| "DELIVERED"
				| "CANCELLED"
				| "RETURNED"
				| "REFUNDED"
				| "FAILED"
				| "ON_HOLD";
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
	PublicTableNameOrOptions extends
		| keyof (PublicSchema["Tables"] & PublicSchema["Views"])
		| { schema: keyof Database },
	TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
		? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
				Database[PublicTableNameOrOptions["schema"]]["Views"])
		: never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
	? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
			Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
			Row: infer R;
		}
		? R
		: never
	: PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
				PublicSchema["Views"])
		? (PublicSchema["Tables"] &
				PublicSchema["Views"])[PublicTableNameOrOptions] extends {
				Row: infer R;
			}
			? R
			: never
		: never;

export type TablesInsert<
	PublicTableNameOrOptions extends
		| keyof PublicSchema["Tables"]
		| { schema: keyof Database },
	TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
		? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
		: never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
	? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
			Insert: infer I;
		}
		? I
		: never
	: PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
		? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
				Insert: infer I;
			}
			? I
			: never
		: never;

export type TablesUpdate<
	PublicTableNameOrOptions extends
		| keyof PublicSchema["Tables"]
		| { schema: keyof Database },
	TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
		? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
		: never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
	? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
			Update: infer U;
		}
		? U
		: never
	: PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
		? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
				Update: infer U;
			}
			? U
			: never
		: never;

export type Enums<
	PublicEnumNameOrOptions extends
		| keyof PublicSchema["Enums"]
		| { schema: keyof Database },
	EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
		? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
		: never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
	? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
	: PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
		? PublicSchema["Enums"][PublicEnumNameOrOptions]
		: never;

export type CompositeTypes<
	PublicCompositeTypeNameOrOptions extends
		| keyof PublicSchema["CompositeTypes"]
		| { schema: keyof Database },
	CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
		schema: keyof Database;
	}
		? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
		: never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
	? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
	: PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
		? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
		: never;
