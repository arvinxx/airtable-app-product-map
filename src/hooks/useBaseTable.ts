import { useBase, useGlobalConfig } from '@airtable/blocks/ui';
import { GlobalSettingsKeys } from '../features/settings';

export const useBaseTable = () => {
  const globalConfig = useGlobalConfig();
  const base = useBase();

  return base.getTableByIdIfExists(
    globalConfig.get(GlobalSettingsKeys.tableId) as string
  );
};
