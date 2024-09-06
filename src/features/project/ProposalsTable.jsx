
import Empty from '../../ui/Empty';
import Table from '../../ui/Table';
import ProposalTBodyRow from './ProposalTBodyRow';
function ProposalsTable({proposals}) {
  if(!proposals.length) return <Empty resourceName={"درخواستی"} />
  return (
    <Table>
          <Table.Header>
            <Table.Row>
              <th>#</th>
              <th>فریلنسر</th>
              <th>توضیحات </th>
              <th>زمان تحویل</th>
              <th>هزینه</th>
              <th>وضعیت</th>
              <th>عملیات</th>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {proposals.map((proposal, index) => (
              <ProposalTBodyRow
                key={proposal._id}
                proposal={proposal}
                index={index}
              />
            ))}
          </Table.Body>
        </Table>
  )
}

export default ProposalsTable
