import React, { FC } from 'react';
import { Flexbox } from '@arvinxu/layout-kit';

import {
  FormField,
  TablePickerSynced,
  ViewPickerSynced,
  FieldPickerSynced,
} from '@airtable/blocks/ui';
import { GlobalSettingsKeys } from '../../features/settings';
import { useBaseTable } from '../../hooks/useBaseTable';
import { Divider } from 'antd';

const Content: FC = () => {
  const table = useBaseTable();

  return (
    <Flexbox>
      <FormField label="数据表" description={'请选择产品表格'}>
        <TablePickerSynced globalConfigKey={GlobalSettingsKeys.tableId} />
      </FormField>
      {!table ? null : (
        <>
          <Divider />

          <FormField
            label="阶段"
            description={'表达用户的大阶段，例如： 了解 > 下载 > 购买'}
          >
            <FieldPickerSynced
              table={table}
              globalConfigKey={GlobalSettingsKeys.flowFieldId}
            />
          </FormField>
          <FormField label="描述" description={'将出现在标题下方'}>
            <FieldPickerSynced
              table={table}
              globalConfigKey={GlobalSettingsKeys.descriptionId}
            />
          </FormField>
          <FormField label="图片" description={'设计稿图片'}>
            <FieldPickerSynced
              table={table}
              globalConfigKey={GlobalSettingsKeys.imageFieldId}
            />
          </FormField>
          {/*<FormField*/}
          {/*  label="链接"*/}
          {/*  description={'之后可以直接嵌入 figma/sketch 页面？'}*/}
          {/*>*/}
          {/*  <FieldPickerSynced*/}
          {/*    table={table}*/}
          {/*    globalConfigKey={GlobalSettingsKeys.urlFieldId}*/}
          {/*  />*/}
          {/*</FormField>*/}
          <Divider />
          <FormField label="数据源">
            <ViewPickerSynced
              table={table}
              placeholder={'请选择包含产品界面记录的视图...'}
              globalConfigKey={GlobalSettingsKeys.viewId}
            />
          </FormField>
        </>
      )}
    </Flexbox>
  );
};

export default Content;
