import Empty from "../../ui/Empty";
import Loading from "../../ui/Loading";
import Table from "../../ui/Table";
import ProposalTBodyRow from "./ProposalTBodyRow";
import useProposals from "./useProposals";


function ProposalTable() {
    const {isLoading, proposals} = useProposals()
    if (isLoading) return <Loading />;
    if (!proposals.length) return <Empty resourceName="درخواستی " />;
    return (
      <>
        <Table>
            <Table.Header>
              <Table.Row>
                <th>#</th>
                <th>توضیحات</th>
                <th>زمان تحویل</th>
                <th>هزینه</th>
                <th>وضعیت</th>
               
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
      </>
    );
}

export default ProposalTable