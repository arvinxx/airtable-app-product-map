import { Field, Record } from '@airtable/blocks/models';
import { FlowNode } from '../types';

interface Choice {
  id: string;
  name: string;
}

/**
 * 从 records 中获取符合 FlowNode 的数据结构
 */
export const getProductData = (
  records: Record[],
  {
    flowField,
    urlField,
    imageField,
    descriptionField,
  }: {
    flowField: Field;
    urlField: Field;
    imageField: Field;
    descriptionField: Field;
  }
): FlowNode[] => {
  const getFlowItems = (flowChoices) => {
    // 获取匹配该字段的项
    const children = records
      .map((r) => {
        const flowCell = r.getCellValue(flowField) as Field;
        if (flowCell.id !== flowChoices.id) return;

        return {
          title: r.name,
          id: r.id,
          description: r.getCellValueAsString(descriptionField),
          image: r.getCellValueAsString(imageField),
          url: r.getCellValueAsString(urlField),
        };
      })
      .filter((i) => i);

    return {
      title: flowChoices.name,
      id: flowChoices.id,
      children,
    };
  };

  // TODO 需要优化类型定义
  // @ts-ignore
  const flows = (flowField.config.options.choices || []) as Choice[];
  return flows.map(getFlowItems).filter((i) => i.children.length > 0);
};
