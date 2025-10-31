const userDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return (
    <div>
      {" "}
      <h1>User Details Page for User #{id}</h1>{" "}
    </div>
  );
};

export default userDetails;
