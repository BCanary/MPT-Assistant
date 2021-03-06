import { Document } from "mongoose";
import { MessageContext, IMessageContextSendOptions } from "vk-io";
export interface MPTCommand {
	regexp: RegExp;
	process: Function;
}

export interface MPTMessage extends MessageContext {
	sendMessage(
		text: string | IMessageContextSendOptions,
		params?: IMessageContextSendOptions | undefined,
	): Promise<MessageContext<Record<string, any>>>;
	user: UserInterface;
	chat?: ChatInterface;
}

export interface UserInterface extends Document {
	id: number;
	vk_id: number;
	ban: boolean;
	reg_date: Date;
	nickname: string;
	data: {
		unical_group_id: number;
	};
}

export interface ChatInterface extends Document {
	id: number;
	unical_group_id: number;
	inform: boolean;
}
