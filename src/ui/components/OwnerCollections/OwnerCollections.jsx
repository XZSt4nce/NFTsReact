import React, {useContext, useEffect} from 'react';
import {WhiteContainer} from "../HOCs/WhiteContainer/WhiteContainer";
import {Context} from "../../../core/ContextWrapper";
import {Collection} from "../../kit/Collection/Collection";
import {EmptyListPlug} from "../EmptyListPlug/EmptyListPlug";

export const OwnerCollections = () => {
    const {collections, updateOwnerCollections} = useContext(Context);

    useEffect(() => {
        (async () => {
            await updateOwnerCollections();
        })();
    }, []);

    return (
        <WhiteContainer className={"mw-100 gap-2"}>
            <h1 className={"text-center"}>Ваши коллекции</h1>
            {collections.length > 0 ? collections.map((collection) => (
                <Collection collection={collection} />
            )) : <EmptyListPlug />}
        </WhiteContainer>
    );
};