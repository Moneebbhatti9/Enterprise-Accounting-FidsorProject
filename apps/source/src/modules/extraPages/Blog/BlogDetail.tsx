import {useGetDataApi} from '@crema/hooks/APIHooks';
import AppLoader from '@crema/components/AppLoader';
import {BlogDetail} from '@crema/modules/extraPages/Blog';
import {useParams} from 'react-router-dom';
import {useEffect} from 'react';
import {isEmptyObject} from '@crema/helpers';
import type {BlogDetailType, BlogSidebarType} from "@crema/models/extrapages/Blog";

const BlogDetailPage = () => {
  const {id} = useParams();
  const [{apiData, loading}, {setQueryParams}] = useGetDataApi<{
    blogDetail: BlogDetailType
    blogSidebar: BlogSidebarType
  } | undefined>(
    '/pages/blogs/detail',
    undefined,
    {id: id},
    false,
  );

  useEffect(() => {
    setQueryParams({id: id});
  }, [id]);

  return loading ? (
    <AppLoader/>
  ) : (
    !isEmptyObject(apiData?.blogDetail) && (
      <BlogDetail
        blogSidebar={apiData?.blogSidebar}
        blogDetail={apiData?.blogDetail}
      />
    ) || null
  );
};
export default BlogDetailPage;
