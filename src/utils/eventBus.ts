import { EventEmitter } from 'events';

export enum ActivityLogTypes {
    USER_SIGN_IN = 'USER_SIGN_IN',
    USER_SIGN_OUT = 'USER_SIGN_OUT',
    USER_UPDATED = 'USER_UPDATED',
    USER_CONDITION_SEARCH = 'USER_CONDITION_SEARCH',
    CONDITION_ADDED = 'CONDITION_ADDED',
    CONDITION_UPDATED = 'CONDITION_UPDATED',
    CONDITION_DELETED = 'CONDITION_DELETED',
    CONDITION_DIAGNOSIS_ADDED = 'CONDITION_DIAGNOSIS_ADDED',
    CONDITION_DIAGNOSIS_DELETED = 'CONDITION_DIAGNOSIS_DELETED',
}

export type EventData = {
    userEmail: string;
    logType: ActivityLogTypes;
    logAttribute: {
        entityIdentifier: string;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        entityData: Record<string, any>;
    };
    logDate: Date;
};

// can be replaced with a queue if persistence is required i.e. SQS, RabbitMQ etc.
export class EventBus extends EventEmitter {
    emitEvent(eventType: ActivityLogTypes, eventData: EventData): boolean {
        return super.emit(eventType, eventData);
    }

    onEvent(eventType: ActivityLogTypes, listener: (eventData: EventData) => void): this {
        return super.on(eventType, listener);
    }
}

export class SingletonEventBus {
    private static instance: EventBus;

    private constructor() {
        // Private constructor to prevent instantiation
    }

    public static getInstance(): EventBus {
        if (!SingletonEventBus.instance) {
            SingletonEventBus.instance = new EventBus();
        }

        return SingletonEventBus.instance;
    }
}
