import { ref, computed, Ref, ComputedRef } from 'vue'
import { deleteRequest, getRequest, postRequest, putRequest } from '../http';

// Type used must have an id.
export const storeModuleFactory = <Type extends { id: number }> (moduleName: string) => {
    
    // Type of state must be explicit, otherwise Ref<UnwrapRef<Type[]>> is inferred.
    // .value then returns UnwrapRefSimple<Type>[] instead of Type[].
    const state: Ref<Type[]> = ref([]);

    const getters = {
        all: computed(() => state.value),
        getById: (id: number) => computed(() => state.value[id])
    };

    const setters = {
        setAll: (items: Type[]) => {
            for (const item of items) {
                // Database starts at index 1, not 0.
                state.value[item.id - 1] = Object.freeze(item);
            } 
        },

        // setAll: (items: Type[]) => {
        //     state.value = items.map(item => Object.freeze(item));
        // },
        
        deleteByItem: (item: Type) => {
            delete state.value[item.id];
        }
    };


    const actions = {
        getAll: async () => {
            const { data }: {data: Type[]} = await getRequest(moduleName);
            if (!data) return;
            setters.setAll(data);
        },

        create: async (item: Type) => {
            const { data } = await postRequest(moduleName, item);
            if (!data) return;
            setters.setAll(data);
        },

        update: async (id: number, item: Type) => {
            const { data } = await putRequest(`${moduleName}/${id}`, item);
            if (!data) return;
            setters.setAll(data);
        },

        delete: async (id: number) => {
            await deleteRequest(`${moduleName}/${id}`);
            setters.deleteByItem(getters.getById(id).value);
        }
    };

    return { getters, setters, actions };
}


